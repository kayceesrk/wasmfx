# WASM + Effect Handlers

For running the OCaml programs, you'll need the Multicore OCaml compiler. 

## Timing using perf and Intel PT

```
echo  $[100*1024*1024] > /proc/sys/kernel/perf_event_mlock_kb
perf record -m 512,100000 -e intel_pt/cyc=1,cyc_thresh=2/u ./snippet
perf script --itrace=i0ns --ns -F time,pid,comm,sym,symoff,insn,ip
```
