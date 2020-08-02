effect A : unit
effect B : unit

let foo () =
  let baz () = perform A in

  let bar () =
    try
      baz ()
    with
    effect B k -> continue k ()
  in

  try
    bar ()
  with
  effect A k -> continue k ()
