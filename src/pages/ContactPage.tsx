import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { branches, type Branch } from "../data/branches";
import { vehicles } from "../data/vehicles";
import type { ContactRequest } from "../types/contact";
import { type ContactField, validateContactRequest } from "../utils/validateContactRequest";
import "./ContactPage.css";

const initialForm: ContactRequest = {
  branchId: "",
  vehicleId: "",
  transmission: "",
  name: "",
  lastName: "",
  phonePrefix: "+505",
  phone: "",
  email: "",
  message: "",
};

const branchMarkerIcon = () => L.divIcon({
  className: "contact-page__marker-icon",
  html: '<span class="contact-page__marker" aria-hidden="true"></span>',
  iconSize: [32, 40],
  iconAnchor: [16, 40],
  popupAnchor: [0, -38],
});

type MappedBranch = Branch & Required<Pick<Branch, "latitude" | "longitude">>;

const hasCoordinates = (branch: Branch): branch is MappedBranch =>
  branch.latitude !== undefined && branch.longitude !== undefined;

const mappedBranches = branches.filter(hasCoordinates);
const contactFields: ContactField[] = ["branchId", "vehicleId", "transmission", "name", "lastName", "phone", "email"];

export function ContactPage({ onInitialReady }: { onInitialReady?: () => void }) {
  const [form, setForm] = useState(initialForm);
  const [touched, setTouched] = useState<Partial<Record<ContactField, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const mapElement = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);
  const submitButton = useRef<HTMLButtonElement>(null);
  const successDialog = useRef<HTMLDialogElement>(null);
  const submittingRef = useRef(false);
  const validation = validateContactRequest(form, vehicles);
  const selectedVehicle = vehicles.find((vehicle) => vehicle.id === form.vehicleId);

  useEffect(() => {
    onInitialReady?.();
  }, [onInitialReady]);

  useEffect(() => {
    if (!mapElement.current || mapInstance.current) return;

    const map = L.map(mapElement.current, {
      scrollWheelZoom: false,
      zoomControl: true,
    });
    mapInstance.current = map;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
      maxZoom: 19,
    }).addTo(map);

    const bounds = L.latLngBounds(
      mappedBranches.map((branch) => [branch.latitude, branch.longitude] as L.LatLngTuple),
    );
    map.fitBounds(bounds, { padding: [32, 32], maxZoom: 7 });

    mappedBranches.forEach((branch) => {
      const marker = L.marker([branch.latitude, branch.longitude], {
        icon: branchMarkerIcon(),
        keyboard: true,
        title: branch.name,
        alt: `Consultar sucursal ${branch.name}`,
      }).addTo(map);

      marker.bindPopup(
        `<article class="contact-page__branch-popup"><strong>${branch.name}</strong><p>${branch.address}</p><span>Teléfonos</span><p>${branch.phones.join("<br>")}</p></article>`,
      );
    });

    return () => {
      map.remove();
      mapInstance.current = null;
    };
  }, []);

  useEffect(() => {
    if (submitted && !successDialog.current?.open) successDialog.current?.showModal();
  }, [submitted]);

  const update = <Field extends keyof ContactRequest>(field: Field, value: ContactRequest[Field]) => {
    setForm((current) => ({ ...current, [field]: value }));
    setSubmitted(false);
  };
  const fieldProps = (field: ContactField, id: string) => ({
    required: true,
    onBlur: () => setTouched((current) => ({ ...current, [field]: true })),
    "aria-invalid": Boolean(touched[field] && validation[field]),
    "aria-describedby": touched[field] && validation[field] ? `${id}-error` : undefined,
  });
  const error = (field: ContactField, id: string) => touched[field] && validation[field]
    ? <p className="contact-page__error" id={`${id}-error`} role="alert">{validation[field]}</p> : null;

  const closeSuccessDialog = () => {
    successDialog.current?.close();
    setSubmitted(false);
    submitButton.current?.focus();
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submittingRef.current) return;
    const nextErrors = validateContactRequest(form, vehicles);
    setTouched(Object.fromEntries(contactFields.map((field) => [field, true])));
    const firstInvalid = contactFields.find((field) => nextErrors[field]);
    if (firstInvalid) {
      event.currentTarget.querySelector<HTMLElement>(`#contact-${firstInvalid}`)?.focus();
      return;
    }
    submittingRef.current = true;
    setSubmitting(true);
    try {
      await new Promise<void>((resolve) => window.setTimeout(resolve, 450));
      setForm(initialForm);
      setTouched({});
      setSubmitted(true);
    } finally {
      submittingRef.current = false;
      setSubmitting(false);
    }
  };

  return (
    <main className="contact-page">
      <div className="contact-page__container">
        <div className="contact-page__layout">
          <section className="contact-page__map" id="contact-map" aria-label="Mapa de sucursales">
            <div
              ref={mapElement}
              className="contact-page__map-canvas"
              aria-label="Mapa de sucursales Casa Pellas. Activa un marcador para consultar sus datos."
            />
          </section>
          <section className="contact-page__form-card" aria-labelledby="contact-form-title">
            <h1 id="contact-form-title">Contacta sucursal Casa Pellas</h1>
            <form noValidate onSubmit={submit}>
              <div className="contact-page__field contact-page__field--full">
                <label htmlFor="contact-branchId">Sucursal</label>
                <select id="contact-branchId" value={form.branchId} {...fieldProps("branchId", "contact-branchId")}
                  onChange={(event) => update("branchId", event.target.value)}>
                  <option value="">Selecciona una sucursal</option>
                  {branches.map((branch) => <option key={branch.id} value={branch.id}>{branch.name}</option>)}
                </select>
                {error("branchId", "contact-branchId")}
              </div>
              <div className="contact-page__field">
                <label htmlFor="contact-vehicleId">Vehículo de interés</label>
                <select id="contact-vehicleId" value={form.vehicleId} {...fieldProps("vehicleId", "contact-vehicleId")}
                  onChange={(event) => {
                    const vehicleId = event.target.value;
                    const vehicle = vehicles.find((item) => item.id === vehicleId);
                    const transmission = vehicle?.transmissions.length === 1 ? vehicle.transmissions[0] : "";
                    update("vehicleId", vehicleId);
                    update("transmission", transmission);
                    setTouched((current) => ({ ...current, transmission: false }));
                  }}>
                  <option value="">Selecciona un vehículo</option>
                  {vehicles.map((vehicle) => <option key={vehicle.id} value={vehicle.id}>{vehicle.brand} {vehicle.model}</option>)}
                </select>
                {error("vehicleId", "contact-vehicleId")}
              </div>
              <div className="contact-page__field">
                <label htmlFor="contact-transmission">Transmisión</label>
                <select id="contact-transmission" value={form.transmission} {...fieldProps("transmission", "contact-transmission")}
                  disabled={!selectedVehicle || selectedVehicle.transmissions.length === 0}
                  onChange={(event) => update("transmission", event.target.value)}>
                  <option value="">{selectedVehicle?.transmissions.length ? "Selecciona una transmisión" : "Selecciona primero un vehículo"}</option>
                  {selectedVehicle?.transmissions.map((transmission) => <option key={transmission}>{transmission}</option>)}
                </select>
                {selectedVehicle && selectedVehicle.transmissions.length === 0 && <p className="contact-page__note">Consulta la transmisión disponible con un asesor.</p>}
                {error("transmission", "contact-transmission")}
              </div>
              <div className="contact-page__field">
                <label htmlFor="contact-name">Nombres</label>
                <input id="contact-name" value={form.name} {...fieldProps("name", "contact-name")} onChange={(event) => update("name", event.target.value)} />
                {error("name", "contact-name")}
              </div>
              <div className="contact-page__field">
                <label htmlFor="contact-lastName">Apellidos</label>
                <input id="contact-lastName" value={form.lastName} {...fieldProps("lastName", "contact-lastName")} onChange={(event) => update("lastName", event.target.value)} />
                {error("lastName", "contact-lastName")}
              </div>
              <div className="contact-page__field">
                <label htmlFor="contact-phone">Teléfono</label>
                <div className="contact-page__phone">
                  <select {...fieldProps("phone", "contact-phone")} aria-label="Prefijo telefónico" value={form.phonePrefix} onChange={(event) => update("phonePrefix", event.target.value as "+505" | "+1")}>
                    <option value="+505">+505</option>
                    <option value="+1">+1</option>
                  </select>
                  <input id="contact-phone" type="tel" value={form.phone} {...fieldProps("phone", "contact-phone")} onChange={(event) => update("phone", event.target.value)} />
                </div>
                {error("phone", "contact-phone")}
              </div>
              <div className="contact-page__field">
                <label htmlFor="contact-email">Correo electrónico</label>
                <input id="contact-email" type="email" value={form.email} {...fieldProps("email", "contact-email")} onChange={(event) => update("email", event.target.value)} />
                {error("email", "contact-email")}
              </div>
              <div className="contact-page__field contact-page__field--full">
                <label htmlFor="contact-message">Mensaje <span>(opcional)</span></label>
                <textarea id="contact-message" value={form.message} onChange={(event) => update("message", event.target.value)} />
              </div>
              <button ref={submitButton} type="submit" disabled={submitting} aria-busy={submitting} aria-label={submitting ? "Procesando solicitud" : undefined}>
                <span className="contact-page__submit-label" aria-hidden={submitting ? true : undefined}>Enviar solicitud</span>
                {submitting && <span className="contact-page__submit-spinner" aria-hidden="true" />}
              </button>
            </form>
            <dialog
              ref={successDialog}
              className="contact-page__success-dialog"
              aria-labelledby="contact-success-title"
              aria-describedby="contact-success-message"
              onCancel={(event) => { event.preventDefault(); closeSuccessDialog(); }}
              onClick={(event) => { if (event.target === event.currentTarget) closeSuccessDialog(); }}
            >
              <span className="contact-page__success-icon" aria-hidden="true">✓</span>
              <h2 id="contact-success-title">Solicitud enviada</h2>
              <p id="contact-success-message">Tu solicitud fue enviada correctamente. Casa Pellas se pondrá en contacto contigo.</p>
              <button type="button" autoFocus onClick={closeSuccessDialog}>Cerrar</button>
            </dialog>
          </section>
        </div>
      </div>
    </main>
  );
}
