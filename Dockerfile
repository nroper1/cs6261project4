FROM node:11.11.0

LABEL "maintainer"="nroper1@my.westga.edu"

USER root

RUN mkdir -p home/nroper1/Documents/cs6261project4/log/calculator

CMD sh home/nroper1/Documents/cs6261project4/containercommands.sh





