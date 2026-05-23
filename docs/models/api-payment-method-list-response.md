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
      feePercentage: "<value>",
      feeFixed: 434478,
      requiresReference: false,
      visibility: "purchases",
      isActive: true,
      isDefault: true,
      createdAt: new Date("2025-02-18T15:44:06.477Z"),
      updatedAt: new Date("2024-06-06T01:57:25.690Z"),
    },
  ],
  hasMore: true,
  nextCursor: "<value>",
  object: "list",
  url: "https://coarse-hierarchy.biz/",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                       | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `data`                                                                                            | [models.ApiPaymentMethodListResponseData](../models/api-payment-method-list-response-data.md)[]   | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `hasMore`                                                                                         | *boolean*                                                                                         | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `nextCursor`                                                                                      | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `object`                                                                                          | [models.ApiPaymentMethodListResponseObject](../models/api-payment-method-list-response-object.md) | :heavy_check_mark:                                                                                | List-envelope discriminator.                                                                      |
| `url`                                                                                             | *string*                                                                                          | :heavy_check_mark:                                                                                | Requested list path.                                                                              |