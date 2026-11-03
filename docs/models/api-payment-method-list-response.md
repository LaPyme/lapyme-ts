# ApiPaymentMethodListResponse

## Example Usage

```typescript
import { ApiPaymentMethodListResponse } from "lapyme/models";

let value: ApiPaymentMethodListResponse = {
  requestId: "<id>",
  data: [
    {
      object: "payment_method",
      id: "a6f890e4-944c-4f97-965c-41539acbb1b0",
      name: "<value>",
      icon: "<value>",
      type: "cash",
      bankAccountId: "4cb581bc-b154-48ae-a3e4-2dcb4949e04c",
      supplierSourceBankAccountId: "76d75262-7471-465f-82c0-5d5956b0c122",
      feePercentage: "<value>",
      feeFixed: 268236,
      requiresReference: false,
      visibility: "system",
      isActive: false,
      isDefault: true,
      createdAt: new Date("2025-04-02T00:30:52.806Z"),
      updatedAt: new Date("2024-01-19T08:25:27.029Z"),
    },
  ],
  hasMore: true,
  nextCursor: "<value>",
  object: "list",
  url: "https://zesty-countess.org",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `requestId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `data`                                                                         | [models.ApiSharedObjecta2bd01d7eb](../models/api-shared-objecta2bd01d7eb.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |
| `hasMore`                                                                      | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `nextCursor`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `object`                                                                       | [models.ApiSharedEnum8d46e1ec20](../models/api-shared-enum8d46e1ec20.md)       | :heavy_check_mark:                                                             | List-envelope discriminator.                                                   |
| `url`                                                                          | *string*                                                                       | :heavy_check_mark:                                                             | Requested list path.                                                           |