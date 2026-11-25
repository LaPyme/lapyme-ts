# UploadApiSupplierPaymentAttachmentResponse

## Example Usage

```typescript
import { UploadApiSupplierPaymentAttachmentResponse } from "lapyme/models/operations";

let value: UploadApiSupplierPaymentAttachmentResponse = {
  headers: {},
  result: {
    requestId: "<id>",
    data: {
      object: "attachment_upload",
      attachmentId: "0695c521-f54f-4ab9-8ebf-66a24df5e89d",
      status: "pending",
      originalFilename: "<value>",
      mimeType: "image/jpeg",
      sizeBytes: 379886,
    },
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `headers`                                                                       | Record<string, *string*[]>                                                      | :heavy_check_mark:                                                              | N/A                                                                             |
| `result`                                                                        | [models.ApiSharedObject8ecba74b2b](../../models/api-shared-object8ecba74b2b.md) | :heavy_check_mark:                                                              | N/A                                                                             |