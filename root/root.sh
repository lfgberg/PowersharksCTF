#!/bin/bash
echo -ne '\e[5mCracking Root Password\e[0m \e[1m-\e[0m \e[32m#\e[0m                        \e[1m-\e[0m (0%)\r'
sleep 3s
echo -ne '\e[5mCracking Root Password\e[0m \e[1m-\e[0m \e[32m#####\e[0m                    \e[1m-\e[0m (21%)\r'
sleep 1s
echo -ne '\e[5mCracking Root Password\e[0m \e[1m-\e[0m \e[32m#############\e[0m            \e[1m-\e[0m (47%)\r'
sleep 1s
echo -ne '\e[5mCracking Root Password\e[0m \e[1m-\e[0m \e[32m##################\e[0m       \e[1m-\e[0m (69%)\r'
sleep 1s
echo -ne '\e[5mCracking Root Password\e[0m \e[1m-\e[0m \e[32m########################\e[0m \e[1m-\e[0m (98%)\r'
sleep 3s
echo ''
echo -ne '\e[1mSuccess. Root Password is\e[0m - \e[42m"n0tThePassword!"\e[0m'
sleep 3s
