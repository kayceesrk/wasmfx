effect E : string

let comp () =
  print_endline "0";
  print_endline (perform E);
  print_endline "3"

let _ =
  try comp () with
  effect E k ->
    print_endline "1";
    continue k "2";
    print_endline "4"
