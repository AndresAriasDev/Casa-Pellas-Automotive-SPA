import { useEffect, useRef, useState } from "react";
import { branches, purchaseTimes, requestFields, validateVehicleRequest } from "../utils/validateVehicleRequest";
import type { RequestErrors, RequestField, VehicleRequestFormData } from "../utils/validateVehicleRequest";

interface VehicleRequestFormProps {
  vehicleId: string;
  model?: string;
}

function RequestHelp({ label, text }: { label: string; text: string }) {
  const ref = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const outside = (event: PointerEvent) => {
      if (ref.current && event.target instanceof Node && !ref.current.contains(event.target)) ref.current.open = false;
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && ref.current?.open) {
        const focused = ref.current.contains(document.activeElement);
        ref.current.open = false;
        if (focused) ref.current.querySelector("summary")?.focus();
      }
    };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
    };
  }, []);
  return <details className="vehicle-request__help" ref={ref}>
    <summary aria-label={label}>i</summary>
    <div className="vehicle-request__help-panel"><p>{text}</p></div>
  </details>;
}

const initialForm: VehicleRequestFormData = {
  lastName: "",
  phonePrefix: "+505",
  identityDocument: "",
  purchaseTime: "",
  branch: "",
  vehicleId: "",
  requestType: "",
  name: "",
  email: "",
  phone: "",
  message: "",
};

export function VehicleRequestForm({
  vehicleId,
  model,
}: VehicleRequestFormProps) {
  const [form, setForm] = useState<VehicleRequestFormData>({
    ...initialForm,
    vehicleId,
  });

  const [touched, setTouched] = useState<Partial<Record<RequestField, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const submittingRef = useRef(false);
  const [closing, setClosing] = useState(false);
  const successDialog = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!submitted) return;
    successDialog.current?.showModal();
    const timer = window.setTimeout(() => setClosing(true), 3000);
    return () => window.clearTimeout(timer);
  }, [submitted]);

  useEffect(() => {
    if (!closing) return;
    const timer = window.setTimeout(() => {
      successDialog.current?.close();
      setSubmitted(false);
      setClosing(false);
      formRef.current?.querySelector<HTMLSelectElement>("#request-type")?.focus();
    }, 180);
    return () => window.clearTimeout(timer);
  }, [closing]);
  const validation = validateVehicleRequest(form);
  const errors: RequestErrors = {};
  for (const field of requestFields) {
    if (touched[field]) errors[field] = validation[field];
  }

  const fieldIds: Record<RequestField, string> = {
    requestType: "request-type", name: "request-name", lastName: "request-last-name",
    phone: "request-phone", email: "request-email", identityDocument: "request-identity",
    purchaseTime: "request-purchase-time", branch: "request-branch",
  };
  const fieldProps = (field: RequestField) => ({
    required: true,
    onBlur: () => setTouched((current) => ({ ...current, [field]: true })),
    "aria-invalid": Boolean(errors[field]),
    "aria-describedby": errors[field] ? fieldIds[field] + "-error" : undefined,
  });
  const fieldError = (field: RequestField) => errors[field]
    ? <p id={fieldIds[field] + "-error"} role="alert">{errors[field]}</p>
    : null;

  const handleChange = (field: keyof VehicleRequestFormData, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setSubmitted(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submittingRef.current) return;
    const nextErrors = validateVehicleRequest(form);
    setTouched(Object.fromEntries(requestFields.map((field) => [field, true])));
    const firstInvalid = requestFields.find((field) => nextErrors[field]);
    if (firstInvalid) {
      setSubmitted(false);
      event.currentTarget.querySelector<HTMLElement>("#" + fieldIds[firstInvalid])?.focus();
      return;
    }
    submittingRef.current = true;
    setSubmitting(true);
    try {
      console.log("Vehicle request submitted:", form);
      setSubmitted(true);
      setForm({ ...initialForm, vehicleId });
      setTouched({});
    } finally {
      submittingRef.current = false;
      setSubmitting(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate>
      <div className="vehicle-detail__request-heading">
        <h2 id="vehicle-request-title">Conoce más sobre tu <span className="vehicle-detail__request-model">{model}</span></h2>
        <RequestHelp label="Información antes de enviar la solicitud" text="Recuerde verificar sus datos antes de presionar el botón de enviar." />
      </div>
      <fieldset>
        <legend>Solicita información</legend>

        <div>
          <label htmlFor="request-type">Solicitud</label>

          <select
            id="request-type" {...fieldProps("requestType")}
            value={form.requestType}
            onChange={(event) =>
              handleChange(
                "requestType",
                event.target.value,
              )
            }
          >
            <option value="" disabled>Selecciona una opción</option>
            <option value="Cotización">Cotización</option>
            <option value="Prueba de manejo">
              Prueba de manejo
            </option>
          </select>
          {fieldError("requestType")}
        </div>

        <div>
          <label htmlFor="request-name">Nombres</label>

          <input
            id="request-name" {...fieldProps("name")}
            type="text"
            value={form.name}
            onChange={(event) =>
              handleChange("name", event.target.value)
            }
          />

          {fieldError("name")}
        </div>

        <div>
          <label htmlFor="request-last-name">Apellidos</label>
          <input id="request-last-name" {...fieldProps("lastName")} type="text" autoComplete="family-name" value={form.lastName}
            onChange={(event) => handleChange("lastName", event.target.value)} />
          {fieldError("lastName")}
        </div>

        <div>
          <label htmlFor="request-phone">Teléfono</label>
          <div className="vehicle-request__phone">
          <select {...fieldProps("phone")} aria-label="Prefijo telefónico" value={form.phonePrefix} onChange={(event) => handleChange("phonePrefix", event.target.value)}>
            <option value="+505">+505</option>
            <option value="+1">+1</option>
          </select>
          <input
            id="request-phone" {...fieldProps("phone")}
            type="tel"
            value={form.phone}
            onChange={(event) =>
              handleChange("phone", event.target.value)
            }
          />

          </div>
          {fieldError("phone")}
        </div>

        <div>
          <label htmlFor="request-email">Correo electrónico</label>
          <input id="request-email" {...fieldProps("email")} type="email" autoComplete="email" value={form.email}
            onChange={(event) => handleChange("email", event.target.value)} />
          {fieldError("email")}
        </div>
        <div className="vehicle-request__full">
          <div className="vehicle-request__label-row">
            <label htmlFor="request-identity">Cédula o documento de identidad</label>
            <RequestHelp label="Ayuda sobre el documento de identidad" text="El campo debe ser llenado conforme a su Cédula de Identidad Nicaragüense o ID; recuerde respetar el formato usando guión (-) para separar los dígitos." />
          </div>
          <input id="request-identity" {...fieldProps("identityDocument")} type="text" value={form.identityDocument}
            onChange={(event) => handleChange("identityDocument", event.target.value)} />
          {fieldError("identityDocument")}
        </div>
        <div className="vehicle-request__full">
          <label htmlFor="request-purchase-time">¿Cuándo deseas realizar tu compra?</label>
          <select id="request-purchase-time" {...fieldProps("purchaseTime")} value={form.purchaseTime} onChange={(event) => handleChange("purchaseTime", event.target.value)}>
            <option value="" disabled>Selecciona una opción</option>
            {purchaseTimes.map((time) => <option key={time}>{time}</option>)}
          </select>
          {fieldError("purchaseTime")}
        </div>
        <div className="vehicle-request__full">
          <label htmlFor="request-branch">¿Dónde deseas ser atendido?</label>
          <select id="request-branch" {...fieldProps("branch")} value={form.branch} onChange={(event) => handleChange("branch", event.target.value)}>
            <option value="" disabled>Selecciona una sucursal</option>
            {branches.map((branch) => <option key={branch}>{branch}</option>)}
          </select>
          {fieldError("branch")}
        </div>

        <button type="submit" disabled={submitting} aria-busy={submitting} aria-label={submitting ? "Procesando solicitud" : undefined}>
          <span className="vehicle-request__submit-label" aria-hidden={submitting ? true : undefined}>Enviar solicitud</span>
          {submitting && <span className="vehicle-request__submit-spinner" aria-hidden="true" />}
        </button>

      </fieldset>
      <dialog
        ref={successDialog}
        className={`vehicle-request__success${closing ? " vehicle-request__success--closing" : ""}`}
        aria-labelledby="request-success-title"
        aria-describedby="request-success-message"
        onCancel={(event) => { event.preventDefault(); setClosing(true); }}
      >
        <span className="vehicle-request__success-icon" aria-hidden="true">✓</span>
        <h3 id="request-success-title">Solicitud enviada</h3>
        <p id="request-success-message">Tu solicitud fue registrada correctamente.</p>
        <button type="button" autoFocus onClick={() => setClosing(true)}>Cerrar</button>
      </dialog>
    </form>
  );
}
