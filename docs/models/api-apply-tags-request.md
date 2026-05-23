# ApiApplyTagsRequest

## Example Usage

```typescript
import { ApiApplyTagsRequest } from "lapyme/models";

let value: ApiApplyTagsRequest = {
  entityIds: [
    "31c7e603-0a37-4848-939b-0bbfbac79582",
    "aba2e85b-6540-4d3a-8133-aa258f71d78f",
  ],
  addTagIds: [
    "f282a17c-3884-4d3e-a8f7-0d3e0771057a",
    "2e719f6f-b7bc-406b-81b3-3b2858286fc6",
    "8ebfd126-d47a-4f9d-b1f2-3aec974b8aec",
  ],
  removeTagIds: [
    "18ec657e-cc00-4147-b95d-5f48460a7727",
    "fa4df388-b2f5-4136-aa81-6b1e0afc3371",
    "d05f9403-7a39-4189-8165-dfea48db456d",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `entityIds`        | *string*[]         | :heavy_check_mark: | N/A                |
| `addTagIds`        | *string*[]         | :heavy_check_mark: | N/A                |
| `removeTagIds`     | *string*[]         | :heavy_check_mark: | N/A                |