# VoidApiDeliveryNoteRequest

## Example Usage

```typescript
import { VoidApiDeliveryNoteRequest } from "lapyme/models/operations";

let value: VoidApiDeliveryNoteRequest = {
  deliveryNoteId: "7c6ae24a-5f37-49d3-9b42-b63ea184c76d",
  idempotencyKey: "<value>",
  body: {
    issuanceId: "9529b4e1-9e3e-4629-9ffb-1f928991eef4",
    reason: "<value>",
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `deliveryNoteId`                                                                    | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `idempotencyKey`                                                                    | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `body`                                                                              | [models.ApiDeliveryNoteVoidRequest](../../models/api-delivery-note-void-request.md) | :heavy_check_mark:                                                                  | N/A                                                                                 |