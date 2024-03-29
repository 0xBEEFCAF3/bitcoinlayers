import type { Infrastructure } from '@/components/infrastructure/infrastructureProps';

//
//infrastructures
import monetaJson from "../content/infrastructures/moneta.json" assert { type: 'json' };
const moneta: Infrastructure = monetaJson as Infrastructure;
import astriaJson from "../content/infrastructures/astria.json" assert { type: 'json' };
const astria: Infrastructure = astriaJson as Infrastructure;
import availJson from "../content/infrastructures/avail.json" assert { type: 'json' };
const avail: Infrastructure = availJson as Infrastructure;
import bitcoinosJson from "../content/infrastructures/bitcoinos.json" assert { type: 'json' };
const bitcoinos: Infrastructure = bitcoinosJson as Infrastructure;
import bvmJson from "../content/infrastructures/bvm.json" assert { type: 'json' };
const bvm: Infrastructure = bvmJson as Infrastructure;
import celestiaJson from "../content/infrastructures/celestia.json" assert { type: 'json' };
const celestia: Infrastructure = celestiaJson as Infrastructure;
import espressoJson from "../content/infrastructures/espresso.json" assert { type: 'json' };
const espresso: Infrastructure = espressoJson as Infrastructure;
import lorenzoJson from "../content/infrastructures/lorenzo.json" assert { type: 'json' };
const lorenzo: Infrastructure = lorenzoJson as Infrastructure;
import sovereignJson from "../content/infrastructures/sovereign.json" assert { type: 'json' };
const sovereign: Infrastructure = sovereignJson as Infrastructure;

export const allInfrastructures: Infrastructure[] = [moneta, astria, avail, bitcoinos, bvm, celestia, espresso, lorenzo, sovereign];