import { useNavigate, useParams } from "react-router-dom";
import { getVehicleById } from "../services/vehicleService";
import { VehicleRequestForm } from "../components/VehicleRequestForm";
import { useEffect, useState } from "react";
import type { Vehicle } from "../types/vehicle";
import { formatVehiclePrice } from "../utils/formatVehiclePrice";

export function VehicleDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  const loadVehicle = async () => {
    if (!id) {
      setVehicle(null);
      setIsLoading(false);
      return;
    }

    const selectedVehicle = await getVehicleById(id);

    setVehicle(selectedVehicle ?? null);
    setIsLoading(false);
  };

  void loadVehicle();
}, [id]);

  if (isLoading) {
    return (
      <main>
        <p>Cargando vehículo...</p>
      </main>
    );
  }

  if (!vehicle) {
    return (
      <main>
        <h1>Vehículo no encontrado</h1>
        <p>El vehículo solicitado no existe.</p>
      </main>
    );
  }

  return (
    <main>
            <button
        type="button"
        onClick={() => navigate("/")}
        >
        ← Volver al catálogo
        </button>
      <h1>
        {vehicle.brand} {vehicle.model}
      </h1>

      <img
        src={vehicle.image}
        alt={`${vehicle.brand} ${vehicle.model}`}
      />

      <p><strong>Año:</strong> {vehicle.year}</p>
      <p><strong>Categoría:</strong> {vehicle.category}</p>
      <p><strong>Precio:</strong> {formatVehiclePrice(vehicle.priceFrom, vehicle.priceTo)}</p>
      <p><strong>Transmisión:</strong> {vehicle.transmissions.join(" / ")}</p>
      <p>{vehicle.description}</p>

    <VehicleRequestForm vehicleId={vehicle.id} />
    </main>
  );
}
