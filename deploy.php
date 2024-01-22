<?php
/**
 * GIT DEPLOYMENT SCRIPT
 *
 */
// The commands
echo "---------------- DEPLOYMENT START --------------\n";
$commands = array(
    "git reset --hard HEAD",
    "git pull ",
    "git status",
    "git submodule sync",
    "git submodule update",
    "git submodule status",
);
// Run the commands for output
$output = '';
foreach($commands AS $command)
{
    // Run it
    $tmp = exec($command);
    echo "Response => ".$tmp."\n";
}
echo "---------------- DEPLOYMENT END --------------\n";
?>
