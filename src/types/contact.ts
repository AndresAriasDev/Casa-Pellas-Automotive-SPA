export interface ContactRequest {
  branchId: string;
  vehicleId: string;
  transmission: string;
  name: string;
  lastName: string;
  phonePrefix: "+505" | "+1";
  phone: string;
  email: string;
  message: string;
}
