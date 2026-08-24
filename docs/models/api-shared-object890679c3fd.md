# ApiSharedObject890679c3fd

Document availability. The URL requires bearer authentication and never contains a storage path or signed query string.

## Example Usage

```typescript
import { ApiSharedObject890679c3fd } from "lapyme/models";

let value: ApiSharedObject890679c3fd = {
  status: "missing",
  url: "https://brisk-cleaner.info/",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `status`                                                                                                     | [models.ApiSharedEnum1ba2b57809](../models/api-shared-enum1ba2b57809.md)                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `url`                                                                                                        | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Stable authenticated La Pyme API path. Present only when status is ready; follow redirects when downloading. |