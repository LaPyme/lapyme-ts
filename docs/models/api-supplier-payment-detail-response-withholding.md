# ApiSupplierPaymentDetailResponseWithholding

## Example Usage

```typescript
import { ApiSupplierPaymentDetailResponseWithholding } from "lapyme/models";

let value: ApiSupplierPaymentDetailResponseWithholding = {
  type: "suss",
  amount: 774168,
  certificateNumber: "<value>",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `id`                                                                                                  | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `type`                                                                                                | [models.ApiSupplierPaymentDetailResponseType](../models/api-supplier-payment-detail-response-type.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `provinceId`                                                                                          | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `regimen`                                                                                             | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `amount`                                                                                              | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `rate`                                                                                                | *number*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `calculationBase`                                                                                     | *number*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `certificateNumber`                                                                                   | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |