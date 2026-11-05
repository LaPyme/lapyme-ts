# ListApiSettlementPendingItemsResponseBody

Committed resource or replay

## Example Usage

```typescript
import { ListApiSettlementPendingItemsResponseBody } from "lapyme/models/operations";

let value: ListApiSettlementPendingItemsResponseBody = {
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
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                                         | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `data`                                                                                                              | [operations.ListApiSettlementPendingItemsData](../../models/operations/list-api-settlement-pending-items-data.md)[] | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `object`                                                                                                            | *"list"*                                                                                                            | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |
| `url`                                                                                                               | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |
| `hasMore`                                                                                                           | *boolean*                                                                                                           | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |
| `nextCursor`                                                                                                        | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |