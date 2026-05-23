# CreateCustomerResponse

## Example Usage

```typescript
import { CreateCustomerResponse } from "lapyme/models";

let value: CreateCustomerResponse = {
  success: true,
  data: {
    id: "48e345a8-ae94-44ca-9de4-bb91b18ba246",
    name: "<value>",
    email: "Shanie.Reynolds@gmail.com",
    phone: "(380) 490-4054 x82606",
    taxId: "<id>",
    taxIdType: "<value>",
    taxCategory: null,
    address: "17994 4th Street",
    apartment: "<value>",
    city: "Mabellehaven",
    province: "<value>",
    isActive: false,
    createdAt: new Date("2026-02-21T12:45:37.663Z"),
    updatedAt: new Date("2026-09-17T03:52:35.794Z"),
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `success`                                                                       | *true*                                                                          | :heavy_check_mark:                                                              | N/A                                                                             |
| `data`                                                                          | [models.CreateCustomerResponseData](../models/create-customer-response-data.md) | :heavy_check_mark:                                                              | N/A                                                                             |