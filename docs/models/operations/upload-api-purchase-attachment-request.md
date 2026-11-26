# UploadApiPurchaseAttachmentRequest

## Example Usage

```typescript
import { UploadApiPurchaseAttachmentRequest } from "lapyme/models/operations";

let value: UploadApiPurchaseAttachmentRequest = {
  purchaseId: "901815d6-53bb-4314-a4cd-c184e9250e2b",
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
| `purchaseId`                                                                    | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `body`                                                                          | [models.ApiSharedObjectb7c8d92c71](../../models/api-shared-objectb7c8d92c71.md) | :heavy_check_mark:                                                              | N/A                                                                             |