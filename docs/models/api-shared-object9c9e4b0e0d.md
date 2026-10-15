# ApiSharedObject9c9e4b0e0d

Document availability. The URL requires bearer authentication and never contains a storage path or signed query string.

## Example Usage

```typescript
import { ApiSharedObject9c9e4b0e0d } from "lapyme/models";

let value: ApiSharedObject9c9e4b0e0d = {
  status: "missing",
  url: "https://expensive-plain.com/",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `status`                                                                                                     | [models.ApiSharedEnum1ba2b57809](../models/api-shared-enum1ba2b57809.md)                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `url`                                                                                                        | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Stable authenticated La Pyme API path. Present only when status is ready; follow redirects when downloading. |