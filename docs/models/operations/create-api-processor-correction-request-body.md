# CreateApiProcessorCorrectionRequestBody

## Example Usage

```typescript
import { CreateApiProcessorCorrectionRequestBody } from "lapyme/models/operations";

let value: CreateApiProcessorCorrectionRequestBody = {
  eventKind: "refund",
  occurredAt: new Date("2026-09-24"),
  withholdingDeltas: [
    {
      taxKind: "iibb",
      amount: 813402,
    },
  ],
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `customerPaymentId`                                                           | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `paymentSplitId`                                                              | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `settlementId`                                                                | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `creditNoteId`                                                                | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `bankAccountId`                                                               | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `bankDelta`                                                                   | *number*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `chargeSource`                                                                | [operations.ChargeSource](../../models/operations/charge-source.md)           | :heavy_minus_sign:                                                            | N/A                                                                           |
| `eventKind`                                                                   | [operations.EventKind](../../models/operations/event-kind.md)                 | :heavy_check_mark:                                                            | N/A                                                                           |
| `occurredAt`                                                                  | [Date](../../types/rfcdate.md)                                                | :heavy_check_mark:                                                            | N/A                                                                           |
| `principalAmount`                                                             | *number*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `feeDelta`                                                                    | *number*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `withholdingDeltas`                                                           | [operations.WithholdingDelta](../../models/operations/withholding-delta.md)[] | :heavy_check_mark:                                                            | N/A                                                                           |
| `integrationSource`                                                           | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `integrationId`                                                               | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |