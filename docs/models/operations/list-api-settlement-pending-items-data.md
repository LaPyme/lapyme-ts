# ListApiSettlementPendingItemsData

## Example Usage

```typescript
import { ListApiSettlementPendingItemsData } from "lapyme/models/operations";

let value: ListApiSettlementPendingItemsData = {
  object: "settlement_pending_item",
  customerPaymentId: "9fdfb216-0154-4ea6-bcdf-78d9d06300d5",
  paymentSplitId: "55a0f2d1-c12d-467a-8067-964f2722bdeb",
  paymentMethodId: "7206c65b-9493-4160-9b3b-8c30bc9a4387",
  paymentDate: new Date("2025-10-01"),
  reference: "<value>",
  originalGrossAmount: 364476,
  recognizedFeeAmount: 517749,
  actualProcessorFeeAmount: 976486,
  withholdingAmount: 497417,
  releasedAmount: 961642,
  correctionAmount: 515837,
  processorCorrectionCount: 541695,
  settlementCount: 139554,
  openAmount: 500047,
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `object`                       | *"settlement_pending_item"*    | :heavy_check_mark:             | N/A                            |
| `customerPaymentId`            | *string*                       | :heavy_check_mark:             | N/A                            |
| `paymentSplitId`               | *string*                       | :heavy_check_mark:             | N/A                            |
| `paymentMethodId`              | *string*                       | :heavy_check_mark:             | N/A                            |
| `paymentDate`                  | [Date](../../types/rfcdate.md) | :heavy_check_mark:             | N/A                            |
| `reference`                    | *string*                       | :heavy_check_mark:             | N/A                            |
| `originalGrossAmount`          | *number*                       | :heavy_check_mark:             | N/A                            |
| `recognizedFeeAmount`          | *number*                       | :heavy_check_mark:             | N/A                            |
| `actualProcessorFeeAmount`     | *number*                       | :heavy_check_mark:             | N/A                            |
| `withholdingAmount`            | *number*                       | :heavy_check_mark:             | N/A                            |
| `releasedAmount`               | *number*                       | :heavy_check_mark:             | N/A                            |
| `correctionAmount`             | *number*                       | :heavy_check_mark:             | N/A                            |
| `processorCorrectionCount`     | *number*                       | :heavy_check_mark:             | N/A                            |
| `settlementCount`              | *number*                       | :heavy_check_mark:             | N/A                            |
| `openAmount`                   | *number*                       | :heavy_check_mark:             | N/A                            |