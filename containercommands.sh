#!/bin/sh
RUN sudo npm install -g @angular/cli
RUN sudo npm install -g http-server
RUN ng build
RUN ng serve
