/**
 * Copyright (c) 2021 OpenLens Authors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import React from "react";
import type { Cluster } from "../../../../main/cluster";
import { observer } from "mobx-react";
import { SubTitle } from "../../layout/sub-title";
import { boundMethod } from "../../../../common/utils";
import { shell } from "electron";
import { Notice } from "../../+extensions/notice";

interface Props {
  cluster: Cluster;
}

@observer
export class ClusterKubeconfig extends React.Component<Props> {

  @boundMethod
  openKubeconfig() {
    const { cluster } = this.props;

    shell.showItemInFolder(cluster.kubeConfigPath);
  }

  render() {
    return (
      <Notice className="mb-14 mt-3">
        <SubTitle title="Kubeconfig" />
        <span>
          <a className="link value" onClick={this.openKubeconfig}>{this.props.cluster.kubeConfigPath}</a>
        </span>
      </Notice>
    );
  }
}
