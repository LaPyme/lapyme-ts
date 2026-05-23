# ApiSaleTransactionRequestPaymentMethod

## Example Usage

```typescript
import { ApiSaleTransactionRequestPaymentMethod } from "lapyme/models";

let value: ApiSaleTransactionRequestPaymentMethod = {
  methodId: "5797eba6-e7d4-4b85-9e28-0580c99800c9",
  amount: 10540,
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