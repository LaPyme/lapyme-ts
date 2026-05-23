# ApiSupplierUpdateResponseData

## Example Usage

```typescript
import { ApiSupplierUpdateResponseData } from "lapyme/models";

let value: ApiSupplierUpdateResponseData = {
  supplier: {
    object: "supplier",
    id: "598684ef-7199-4331-9bc8-08614bcd189b",
    name: "<value>",
    companyName: "Yost - Prosacco",
    description: null,
    email: null,
    phone: "1-259-825-2158",
    taxId: "<id>",
    taxIdType: "<value>",
    taxCategory: "<value>",
    paymentTermId: "<id>",
    isActive: false,
    country: "Cameroon",
    provinceId: "<id>",
    city: "New Maurice",
    address: "829 Ernser Street",
    apartment: "<value>",
    postalCode: "34318",
    createdAt: new Date("2024-09-21T13:42:49.548Z"),
    updatedAt: new Date("2024-09-06T05:50:24.199Z"),
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `supplier`                                                                                     | [models.ApiSupplierUpdateResponseSupplier](../models/api-supplier-update-response-supplier.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |