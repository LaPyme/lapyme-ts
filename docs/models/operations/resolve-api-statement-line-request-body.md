# ResolveApiStatementLineRequestBody


## Supported Types

### `operations.Link`

```typescript
const value: operations.Link = {
  action: "link",
};
```

### `operations.Movement`

```typescript
const value: operations.Movement = {
  action: "movement",
};
```

### `operations.Transfer`

```typescript
const value: operations.Transfer = {
  action: "transfer",
  counterpartType: "safe",
  counterpartId: "00feef34-4908-4964-9435-2c0e831a3754",
};
```

### `operations.ExcludeT`

```typescript
const value: operations.ExcludeT = {
  action: "exclude",
  reason: "<value>",
};
```

### `operations.Undo`

```typescript
const value: operations.Undo = {
  action: "undo",
  reason: "<value>",
};
```

