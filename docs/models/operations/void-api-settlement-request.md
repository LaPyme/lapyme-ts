# VoidApiSettlementRequest

## Example Usage

```typescript
import { VoidApiSettlementRequest } from "lapyme/models/operations";

let value: VoidApiSettlementRequest = {
  idempotencyKey: "<value>",
  settlementId: "6e60e43a-72cf-498d-be05-120fd411ed20",
  body: {},
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `idempotencyKey`                                                                                       | *string*                                                                                               | :heavy_check_mark:                                                                                     | Clave estable para deduplicar reintentos de la misma operación.                                        |
| `settlementId`                                                                                         | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `body`                                                                                                 | [operations.VoidApiSettlementRequestBody](../../models/operations/void-api-settlement-request-body.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |