# ApiSharedObjectb7c8d92c71

## Example Usage

```typescript
import { ApiSharedObjectb7c8d92c71 } from "lapyme/models";

let value: ApiSharedObjectb7c8d92c71 = {
  stage: "complete",
  metadata: {
    operationId: "86a1453d-9533-4b8a-9887-6672c7ac1feb",
    originalFilename: "<value>",
    mimeType: "application/pdf",
    sizeBytes: 72983,
    contentSha256: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `stage`                                                                      | [models.ApiSharedEnum98ef54f193](../models/api-shared-enum98ef54f193.md)     | :heavy_check_mark:                                                           | N/A                                                                          |
| `metadata`                                                                   | [models.ApiSharedObjectc90fd93607](../models/api-shared-objectc90fd93607.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `attachmentId`                                                               | *string*                                                                     | :heavy_minus_sign:                                                           | Obligatorio al completar.                                                    |