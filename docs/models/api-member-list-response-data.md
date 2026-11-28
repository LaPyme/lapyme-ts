# ApiMemberListResponseData

## Example Usage

```typescript
import { ApiMemberListResponseData } from "lapyme/models";

let value: ApiMemberListResponseData = {
  object: "member",
  id: "923162ca-c680-4d44-a7a1-b285b349f1e5",
  name: "<value>",
  isActive: true,
  canSell: false,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `object`                                                                                                      | *"member"*                                                                                                    | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `id`                                                                                                          | *string*                                                                                                      | :heavy_check_mark:                                                                                            | ID de usuario devuelto por GET /api/v1/members.                                                               |
| `name`                                                                                                        | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `isActive`                                                                                                    | *boolean*                                                                                                     | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `canSell`                                                                                                     | *boolean*                                                                                                     | :heavy_check_mark:                                                                                            | El miembro está activo y tiene org:sales:write. POST /api/v1/sales también requiere acceso al punto de venta. |