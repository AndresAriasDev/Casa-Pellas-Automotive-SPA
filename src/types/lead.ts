export type RequestType = "Cotización" | "Prueba de manejo";

export interface VehicleRequest {
  vehicleId: string;
  requestType: RequestType;
  name: string;
  email: string;
  phone: string;
  message: string;
}