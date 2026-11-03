# ApiSharedObjecta9a56f8ba3

## Example Usage

```typescript
import { ApiSharedObjecta9a56f8ba3 } from "lapyme/models";

let value: ApiSharedObjecta9a56f8ba3 = {
  requestId: "<id>",
  data: {
    object: "settlement",
    id: "2f1d0621-2f1d-4add-b6f9-afcb45b69cbb",
    bankAccountId: "448ab508-231b-475f-b234-8dac63881b43",
    settlementDate: new Date("2024-08-03"),
    status: "<value>",
    grossAmount: 742850,
    deductionsAmount: 431544,
    netAmount: 310577,
    createdAt: new Date("2024-03-17T19:07:05.039Z"),
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `requestId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | [models.ApiSharedObjectf0953ff270](../models/api-shared-objectf0953ff270.md) | :heavy_check_mark:                                                           | N/A                                                                          |