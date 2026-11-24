# UploadApiCustomerPaymentAttachmentRequest

## Example Usage

```typescript
import { UploadApiCustomerPaymentAttachmentRequest } from "lapyme/models/operations";

let value: UploadApiCustomerPaymentAttachmentRequest = {
  paymentId: "e7a9969c-d349-4b84-b318-65c6c3a780a5",
  body: {
    stage: "reserve",
    metadata: {
      operationId: "86a1453d-9533-4b8a-9887-6672c7ac1feb",
      originalFilename: "<value>",
      mimeType: "application/pdf",
      sizeBytes: 72983,
      contentSha256: "<value>",
    },
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `paymentId`                                                                     | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `body`                                                                          | [models.ApiSharedObjectb7c8d92c71](../../models/api-shared-objectb7c8d92c71.md) | :heavy_check_mark:                                                              | N/A                                                                             |