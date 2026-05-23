# UpdateCustomerResponse

## Example Usage

```typescript
import { UpdateCustomerResponse } from "lapyme/models";

let value: UpdateCustomerResponse = {
  success: true,
  data: {
    id: "bc37ba87-ad2c-4abb-97be-6a337c96d5ec",
    name: "<value>",
    email: null,
    phone: "348-778-7963",
    taxId: "<id>",
    taxIdType: "<value>",
    taxCategory: "<value>",
    address: "297 Erik Terrace",
    apartment: "<value>",
    city: "Port Brooklyn",
    province: "<value>",
    isActive: true,
    createdAt: new Date("2024-10-15T10:48:05.696Z"),
    updatedAt: new Date("2024-10-12T05:53:18.864Z"),
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `success`                                                                       | *true*                                                                          | :heavy_check_mark:                                                              | N/A                                                                             |
| `data`                                                                          | [models.UpdateCustomerResponseData](../models/update-customer-response-data.md) | :heavy_check_mark:                                                              | N/A                                                                             |