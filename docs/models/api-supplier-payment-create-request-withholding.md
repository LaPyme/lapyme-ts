# ApiSupplierPaymentCreateRequestWithholding

## Example Usage

```typescript
import { ApiSupplierPaymentCreateRequestWithholding } from "lapyme/models";

let value: ApiSupplierPaymentCreateRequestWithholding = {
  type: "ganancias",
  amount: 964025,
  certificateNumber: "<value>",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `id`                                                                                                | *string*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `type`                                                                                              | [models.ApiSupplierPaymentCreateRequestType](../models/api-supplier-payment-create-request-type.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `provinceId`                                                                                        | *string*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `regimen`                                                                                           | *string*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `amount`                                                                                            | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `rate`                                                                                              | *number*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `calculationBase`                                                                                   | *number*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `certificateNumber`                                                                                 | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |