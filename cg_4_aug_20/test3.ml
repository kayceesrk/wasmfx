effect E : unit

let foo () =
  nop(); (* a *)
  try
    nop(); (* b *)
    perform E;
    nop() (* d *)
  with effect E k ->
    nop(); (* c *)
    continue k ();
    nop() (* e *)

let _ = foo ()
