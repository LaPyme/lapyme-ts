# UploadApiSupplierPaymentAttachmentRequest

## Example Usage

```typescript
import { UploadApiSupplierPaymentAttachmentRequest } from "lapyme/models/operations";

let value: UploadApiSupplierPaymentAttachmentRequest = {
  paymentId: "853c0347-34e4-401a-b581-922a8aa4aaa2",
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