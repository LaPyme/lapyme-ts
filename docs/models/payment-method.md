# PaymentMethod

## Example Usage

```typescript
import { PaymentMethod } from "lapyme/models";

let value: PaymentMethod = {
  methodId: "efda23df-1ae6-4b27-aeea-210a9e4e6658",
  amount: 743554,
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `methodId`                | *string*                  | :heavy_check_mark:        | N/A                       |
| `amount`                  | *number*                  | :heavy_check_mark:        | N/A                       |
| `description`             | *string*                  | :heavy_minus_sign:        | N/A                       |
| `reference`               | *string*                  | :heavy_minus_sign:        | N/A                       |
| `feeAmount`               | *number*                  | :heavy_minus_sign:        | N/A                       |
| `terminalId`              | *string*                  | :heavy_minus_sign:        | N/A                       |
| `cardBatchNumber`         | *string*                  | :heavy_minus_sign:        | N/A                       |
| `cardCouponNumber`        | *string*                  | :heavy_minus_sign:        | N/A                       |
| `cardInstallmentPlanCode` | *string*                  | :heavy_minus_sign:        | N/A                       |
| `cardBrand`               | *string*                  | :heavy_minus_sign:        | N/A                       |