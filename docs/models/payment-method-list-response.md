# PaymentMethodListResponse

## Example Usage

```typescript
import { PaymentMethodListResponse } from "lapyme/models";

let value: PaymentMethodListResponse = {
  success: true,
  data: [
    {
      id: "ee5812b8-5eda-4074-b8df-5066a1f98438",
      name: "<value>",
      icon: "<value>",
      feePercentage: "<value>",
      feeFixed: 9590.9,
      requiresReference: true,
      isActive: false,
      isDefault: true,
      createdAt: new Date("2026-08-23T19:30:19.617Z"),
      updatedAt: new Date("2024-03-30T14:54:38.888Z"),
    },
  ],
  pagination: {
    page: 7520.54,
    limit: 6820.33,
    total: 72.22,
    totalPages: 6611.29,
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `success`                                                                                          | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `data`                                                                                             | [models.PaymentMethodListResponseData](../models/payment-method-list-response-data.md)[]           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `pagination`                                                                                       | [models.PaymentMethodListResponsePagination](../models/payment-method-list-response-pagination.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |