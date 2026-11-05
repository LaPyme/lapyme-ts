# ListApiSettlementPendingItemsResponse

## Example Usage

```typescript
import { ListApiSettlementPendingItemsResponse } from "lapyme/models/operations";

let value: ListApiSettlementPendingItemsResponse = {
  headers: {
    "key": [],
  },
  result: {
    requestId: "<id>",
    data: [
      {
        object: "settlement_pending_item",
        customerPaymentId: "6c82eda3-dca9-4ae8-bc02-b3c7aa682498",
        paymentSplitId: "6be8101e-260e-4506-a034-2e7ab81db870",
        paymentMethodId: "94608c1a-93db-433c-8557-da495ab065d3",
        paymentDate: new Date("2026-03-28"),
        reference: "<value>",
        originalGrossAmount: 329498,
        recognizedFeeAmount: 942792,
        actualProcessorFeeAmount: 179529,
        withholdingAmount: 989526,
        releasedAmount: 927376,
        correctionAmount: 644587,
        processorCorrectionCount: 918989,
        settlementCount: 865037,
        openAmount: 351003,
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                          | Record<string, *string*[]>                                                                                                         | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `result`                                                                                                                           | [operations.ListApiSettlementPendingItemsResponseBody](../../models/operations/list-api-settlement-pending-items-response-body.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |