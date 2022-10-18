
/*
 * Usage
 *
 * deno task --cwd [subdirectory] ping [app_url] [phrase_to_search_for_in_next_deployment]
 *   e.g. deno task --cwd vercel ping https://nextjs-vercel-demo-gules.vercel.app/ andyjiang
 */

const url = Deno.args[0];
const keyPhrase = Deno.args[1];

// Start timestamp.
const startTimeStamp = Date.now();

console.log('');
console.log('');
console.log(`Starting the timer...`);

let noChangeDetected = true;
while (noChangeDetected) {
  const res = await fetch(url);
  const body = await res.text();

  // Check if body contains XYZ then set noChangeDetected to false.
  if (body.includes(keyPhrase)) {
    noChangeDetected = false;
    console.log(`${keyPhrase} detected on website...`);
  }
}

// Calculate time difference.
const endTimeStamp = Date.now();
const differenceInTimeStamp = endTimeStamp - startTimeStamp;
console.log(`Total deployment time: ${differenceInTimeStamp/1000}s`);
