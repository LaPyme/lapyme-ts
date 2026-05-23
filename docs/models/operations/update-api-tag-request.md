# UpdateApiTagRequest

## Example Usage

```typescript
import { UpdateApiTagRequest } from "lapyme/models/operations";

let value: UpdateApiTagRequest = {
  tagId: "3b80c86d-8b18-432a-b360-a90d46c2f3e6",
  body: {},
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `tagId`                                                                             | *string*                                                                            | :heavy_check_mark:                                                                  | ID de la etiqueta                                                                   |
| `xRequestId`                                                                        | *string*                                                                            | :heavy_minus_sign:                                                                  | ID opcional de la solicitud para trazabilidad. Si se omite, el servidor genera uno. |
| `body`                                                                              | [models.ApiTagUpdateRequest](../../models/api-tag-update-request.md)                | :heavy_check_mark:                                                                  | N/A                                                                                 |