# ApplyApiProductTagsRequest

## Example Usage

```typescript
import { ApplyApiProductTagsRequest } from "lapyme/models/operations";

let value: ApplyApiProductTagsRequest = {
  body: {
    entityIds: [
      "27381c17-a86c-4d11-b788-3311ac580ce5",
      "325bc7b6-99c5-4e79-b397-0e8da6a8e680",
    ],
    addTagIds: [
      "6bb776eb-42a0-4a34-843d-48d821ee88bc",
      "4e5dd332-b64c-4b36-a476-860eecc50419",
      "c7baf809-95bd-44ab-9e14-88f38a51274d",
    ],
    removeTagIds: [
      "b6462968-67d2-4448-9156-296a402c3dcc",
    ],
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `xRequestId`                                                                        | *string*                                                                            | :heavy_minus_sign:                                                                  | ID opcional de la solicitud para trazabilidad. Si se omite, el servidor genera uno. |
| `body`                                                                              | [models.ApiApplyTagsRequest](../../models/api-apply-tags-request.md)                | :heavy_check_mark:                                                                  | N/A                                                                                 |