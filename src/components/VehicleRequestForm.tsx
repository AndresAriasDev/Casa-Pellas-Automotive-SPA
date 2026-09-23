import { useState } from "react";
import type { RequestType, VehicleRequest } from "../types/lead";

interface VehicleRequestFormProps {
  vehicleId: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

const initialForm: VehicleRequest = {
  vehicleId: "",
  requestType: "Cotización",
  name: "",
  email: "",
  phone: "",
  message: "",
};

export function VehicleRequestForm({
  vehicleId,
}: VehicleRequestFormProps) {
  const [form, setForm] = useState<VehicleRequest>({
    ...initialForm,
    vehicleId,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    field: keyof VehicleRequest,
    value: string,
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => ({
      ...current,
      [field]: undefined,
    }));

    setSubmitted(false);
  };

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Ingresa tu nombre.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Ingresa tu correo electrónico.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Ingresa un correo válido.";
    }

    if (!form.phone.trim()) {
      nextErrors.phone = "Ingresa tu número de teléfono.";
    }

    return nextErrors;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);

    console.log("Vehicle request submitted:", form);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <fieldset>
        <legend>Solicita información</legend>

        <div>
          <label htmlFor="request-type">Solicitud</label>

          <select
            id="request-type"
            value={form.requestType}
            onChange={(event) =>
              handleChange(
                "requestType",
                event.target.value as RequestType,
              )
            }
          >
            <option value="Cotización">Cotización</option>
            <option value="Prueba de manejo">
              Prueba de manejo
            </option>
          </select>
        </div>

        <div>
          <label htmlFor="request-name">Nombre completo</label>

          <input
            id="request-name"
            type="text"
            value={form.name}
            onChange={(event) =>
              handleChange("name", event.target.value)
            }
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "request-name-error" : undefined}
          />

          {errors.name && (
            <p id="request-name-error" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="request-email">Correo electrónico</label>

          <input
            id="request-email"
            type="email"
            value={form.email}
            onChange={(event) =>
              handleChange("email", event.target.value)
            }
            aria-invalid={Boolean(errors.email)}
            aria-describedby={
              errors.email ? "request-email-error" : undefined
            }
          />

          {errors.email && (
            <p id="request-email-error" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="request-phone">Teléfono</label>

          <input
            id="request-phone"
            type="tel"
            value={form.phone}
            onChange={(event) =>
              handleChange("phone", event.target.value)
            }
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={
              errors.phone ? "request-phone-error" : undefined
            }
          />

          {errors.phone && (
            <p id="request-phone-error" role="alert">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="request-message">
            Mensaje <span>(opcional)</span>
          </label>

          <textarea
            id="request-message"
            value={form.message}
            onChange={(event) =>
              handleChange("message", event.target.value)
            }
            rows={4}
          />
        </div>

        <button type="submit">
          Enviar solicitud
        </button>

        {submitted && (
          <p role="status">
            Tu solicitud fue registrada correctamente.
          </p>
        )}
      </fieldset>
    </form>
  );
}