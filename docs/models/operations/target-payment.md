# TargetPayment

## Example Usage

```typescript
import { TargetPayment } from "lapyme/models/operations";

let value: TargetPayment = {
  type: "payment",
  paymentId: "3a9f6b23-10a3-416f-9ecb-e254e26347a2",
  amount: 369367,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `type`             | *"payment"*        | :heavy_check_mark: | N/A                |
| `paymentId`        | *string*           | :heavy_check_mark: | N/A                |
| `amount`           | *number*           | :heavy_check_mark: | N/A                |