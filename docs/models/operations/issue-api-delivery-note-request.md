# IssueApiDeliveryNoteRequest

## Example Usage

```typescript
import { IssueApiDeliveryNoteRequest } from "lapyme/models/operations";

let value: IssueApiDeliveryNoteRequest = {
  deliveryNoteId: "b9e72ff1-4e25-44ee-a1a7-93643500fd72",
  idempotencyKey: "<value>",
  body: {
    talonarioId: "da20c99c-7fe2-4fc8-bd7e-1bbd4b082df6",
    expectedRevision: 686939,
    expectedContentHash: "<value>",
  },
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `deliveryNoteId`                                                                      | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `idempotencyKey`                                                                      | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `body`                                                                                | [models.ApiDeliveryNoteIssueRequest](../../models/api-delivery-note-issue-request.md) | :heavy_check_mark:                                                                    | N/A                                                                                   |