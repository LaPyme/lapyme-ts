# ApiSharedObject90c6702b30

## Example Usage

```typescript
import { ApiSharedObject90c6702b30 } from "lapyme/models";

let value: ApiSharedObject90c6702b30 = {
  object: "attachment_upload",
  attachmentId: "05fa66d3-2327-42d9-bdba-3566a4865ec9",
  status: "ready",
  originalFilename: "<value>",
  mimeType: "image/png",
  sizeBytes: 759062,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `object`                                                                 | *"attachment_upload"*                                                    | :heavy_check_mark:                                                       | N/A                                                                      |
| `attachmentId`                                                           | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `status`                                                                 | [models.ApiSharedEnum7ea6f1bdde](../models/api-shared-enum7ea6f1bdde.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `originalFilename`                                                       | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `mimeType`                                                               | [models.ApiSharedEnumbf399e5c67](../models/api-shared-enumbf399e5c67.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `sizeBytes`                                                              | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `alreadyUploaded`                                                        | *true*                                                                   | :heavy_minus_sign:                                                       | El objeto ya existe. Completá la reserva.                                |
| `uploadUrl`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | URL firmada para cargar un solo objeto.                                  |