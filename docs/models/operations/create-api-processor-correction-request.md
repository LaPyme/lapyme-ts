# CreateApiProcessorCorrectionRequest

## Example Usage

```typescript
import { CreateApiProcessorCorrectionRequest } from "lapyme/models/operations";

let value: CreateApiProcessorCorrectionRequest = {
  idempotencyKey: "<value>",
  body: {
    eventKind: "fee_correction",
    occurredAt: new Date("2024-03-27"),
    withholdingDeltas: [],
  },
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                                                              | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | Clave estable para deduplicar reintentos de la misma operación.                                                               |
| `body`                                                                                                                        | [operations.CreateApiProcessorCorrectionRequestBody](../../models/operations/create-api-processor-correction-request-body.md) | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |