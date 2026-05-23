# ApplyApiSaleTagsRequest

## Example Usage

```typescript
import { ApplyApiSaleTagsRequest } from "lapyme/models/operations";

let value: ApplyApiSaleTagsRequest = {
  body: {
    entityIds: [],
    addTagIds: [],
    removeTagIds: [
      "62f7bf68-6e44-4fa7-b44a-b66fb014329e",
    ],
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `xRequestId`                                                                        | *string*                                                                            | :heavy_minus_sign:                                                                  | ID opcional de la solicitud para trazabilidad. Si se omite, el servidor genera uno. |
| `body`                                                                              | [models.ApiApplyTagsRequest](../../models/api-apply-tags-request.md)                | :heavy_check_mark:                                                                  | N/A                                                                                 |