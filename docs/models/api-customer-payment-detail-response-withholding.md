# ApiCustomerPaymentDetailResponseWithholding

## Example Usage

```typescript
import { ApiCustomerPaymentDetailResponseWithholding } from "lapyme/models";

let value: ApiCustomerPaymentDetailResponseWithholding = {
  type: "suss",
  amount: 232510,
  certificateNumber: "<value>",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `id`                                                                                                  | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `type`                                                                                                | [models.ApiCustomerPaymentDetailResponseType](../models/api-customer-payment-detail-response-type.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `provinceId`                                                                                          | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `regimen`                                                                                             | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `amount`                                                                                              | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `rate`                                                                                                | *number*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `calculationBase`                                                                                     | *number*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `certificateNumber`                                                                                   | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |