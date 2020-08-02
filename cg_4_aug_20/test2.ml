effect A : unit
effect B : unit

let baz () = perform A

let bar () =
  try
    baz ()
  with
  effect B k -> continue k ()

let foo () =
  try
    bar ()
  with
  effect A k -> continue k ()
