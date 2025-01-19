# React State Update Race Condition

This repository demonstrates a common issue in React applications: a race condition when updating state asynchronously.  The example shows how calling `setCount` multiple times within a short period can result in an incorrect count, and the solution demonstrates how to address this issue.

## Problem

The `MyComponent` component uses `useState` to track a count. The `handleClick` function intends to increment the count by two. However, it does this asynchronously using `setTimeout`. Because of this, React may only render one of the increments. This is because React batches state updates. It does this to improve performance. However, when you call `setCount` multiple times in rapid succession, these updates could get overwritten.

## Solution

The solution uses the functional form of `setCount` and merges state updates to ensure that they are processed sequentially.  This guarantees that the count will always be incremented correctly.