# ApiSharedObjectdacb842378

## Example Usage

```typescript
import { ApiSharedObjectdacb842378 } from "lapyme/models";

let value: ApiSharedObjectdacb842378 = {
  file: {
    status: "ready",
    url: "https://blue-legging.net",
  },
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `file`                                                                                                                  | [models.ApiSharedObject9c9e4b0e0d](../models/api-shared-object9c9e4b0e0d.md)                                            | :heavy_check_mark:                                                                                                      | Document availability. The URL requires bearer authentication and never contains a storage path or signed query string. |
| `additionalProperties`                                                                                                  | Record<string, *any*>                                                                                                   | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |